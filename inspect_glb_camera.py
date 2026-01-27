import struct
import json
import sys

def parse_glb(file_path):
    with open(file_path, 'rb') as f:
        # Read header
        magic, version, length = struct.unpack('<3I', f.read(12))
        if magic != 0x46546C67: # 'glTF'
            print("Not a valid GLB file")
            return

        # Read chunks
        while f.tell() < length:
            chunk_len, chunk_type = struct.unpack('<2I', f.read(8))
            chunk_data = f.read(chunk_len)
            
            if chunk_type == 0x4E4F534A: # JSON
                data = json.loads(chunk_data.decode('utf-8'))
                # Filter for relevant keys to avoid huge output
                filtered = {k: v for k, v in data.items() if k in ['cameras', 'nodes', 'scenes', 'asset']}
                print(json.dumps(filtered, indent=2))
                return

parse_glb('/Users/matheusdanoite/Desktop/meu portfólio/public/matheus_3d.glb')
