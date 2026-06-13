import os
import sys
import socket
import threading
import subprocess
import time
import urllib.request
from urllib.error import URLError, HTTPError
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

DEFAULT_PORT = 58271

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        try:
            s.connect(('127.0.0.1', port))
            return True
        except:
            return False

def is_app_server_running(port):
    if not is_port_in_use(port):
        return False

    try:
        with urllib.request.urlopen(f'http://127.0.0.1:{port}/index.html', timeout=0.5) as response:
            html = response.read(256).decode('utf-8', errors='ignore')
            return 'HEC Montréal - Tableau de Bord M.Sc.' in html
    except (URLError, HTTPError, OSError):
        return False

def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]

def start_server(directory, port):
    os.chdir(directory)
    handler = SimpleHTTPRequestHandler
    handler.log_message = lambda *args: None
    
    # Force binding to 127.0.0.1 to avoid IPv6 conflicts
    class MyTCPServer(TCPServer):
        allow_reuse_address = True
        
    with MyTCPServer(("127.0.0.1", port), handler) as httpd:
        httpd.serve_forever()

def get_current_dir():
    if getattr(sys, 'frozen', False):
        return sys._MEIPASS
    return os.path.dirname(os.path.abspath(__file__))

def get_edge_path():
    paths = [
        os.path.expandvars(r"%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"),
        os.path.expandvars(r"%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"),
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"
    ]
    for path in paths:
        if os.path.exists(path):
            return path
    return "msedge.exe"

def main():
    current_dir = get_current_dir()
    port = DEFAULT_PORT
    url = f"http://127.0.0.1:{port}/index.html"

    server_already_running = is_app_server_running(port)

    if not server_already_running:
        if is_port_in_use(port):
            port = find_free_port()
            url = f"http://127.0.0.1:{port}/index.html"

        # Start local HTTP server in a separate thread
        server_thread = threading.Thread(target=start_server, args=(current_dir, port), daemon=True)
        server_thread.start()
        # Give the server a moment to spin up
        time.sleep(0.5)
    
    edge_path = get_edge_path()
    edge_cmd = [
        edge_path,
        f"--app={url}",
        "--window-size=1280,800",
        "--title=HEC Studio - M.Sc. Dashboard"
    ]

    try:
        subprocess.Popen(edge_cmd)
    except Exception:
        import webbrowser
        webbrowser.open(url)

    # If we started the server, we must keep Python alive indefinitely to serve files!
    if not server_already_running:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            pass

if __name__ == '__main__':
    main()
