import os

def update_imports():
    root_dir = 'src/pages'
    
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.jsx') or filename.endswith('.js'):
                file_path = os.path.join(dirpath, filename)
                
                # Calculate depth relative to src/pages
                # src/pages/Home -> basedir is Home, depth is 1
                rel_path = os.path.relpath(dirpath, 'src/pages')
                if rel_path == '.':
                    depth = 0 # src/pages/File.jsx
                else:
                    depth = len(rel_path.split(os.sep))
                
                # Calculate ../ sequence to get to src
                # src/pages/Home/index.jsx -> depth inside pages is 1.
                # Path to components is ../../components
                # 1 level up (Home) -> src/pages. 2 levels up -> src.
                
                # If depth=1 (src/pages/Home/index.jsx): needed ../../components
                # If depth=2 (src/pages/Expertise/Cloud/index.jsx): needed ../../../components
                
                backticks = "../" * (depth + 1)
                
                with open(file_path, 'r') as f:
                    content = f.read()
                
                new_content = content
                
                # specific string replacements
                # Navbar
                new_content = new_content.replace('"../products/Navbar"', f'"{backticks}components/Layout/Navbar"')
                new_content = new_content.replace('"../../products/Navbar"', f'"{backticks}components/Layout/Navbar"') # just in case
                
                # Footer
                new_content = new_content.replace('"../products/Footer"', f'"{backticks}components/Layout/Footer"')
                new_content = new_content.replace('"../../src/products/Footer"', f'"{backticks}components/Layout/Footer"')
                
                # Talktous
                new_content = new_content.replace('"../products/Talktous"', f'"{backticks}components/Common/Talktous"')
                
                # Faq
                new_content = new_content.replace('"../products/Faq"', f'"{backticks}components/Common/Faq"')
                
                # Videos
                # Old path: ../../src/videos/
                # New path: src/assets/videos/
                # Relative path to assets/videos:
                # src/pages/Home -> ../../assets/videos
                new_content = new_content.replace('"../../src/videos/', f'"{backticks}assets/videos/')
                new_content = new_content.replace('"../../videos/', f'"{backticks}assets/videos/')
                
                # CSS imports inside pages are likely fine if they are ./
                # But if they import from ../products/Something.css and I moved it...
                # I moved CSS with files, so imports like import "./Industries.css" or import "../Industries/Industries.css" might break if relative relationships changed.
                # But I co-located CSS.
                # Exception: DOCaliber imported "../Industries/Industries.css".
                
                if content != new_content:
                    print(f"Updating {file_path}")
                    with open(file_path, 'w') as f:
                        f.write(new_content)

if __name__ == "__main__":
    update_imports()
