import re
import sys

def resolve_conflicts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match conflict blocks - keep "theirs" (PR branch) version
    # <<<<<<< HEAD ... ======= ... >>>>>>> commit
    pattern = r'<<<<<<< HEAD\n(.*?)=======\n(.*?)>>>>>>> [^\n]+\n'
    
    def replace_conflict(match):
        # Return "theirs" version (second group)
        return match.group(2)
    
    resolved = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
    
    if resolved != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(resolved)
        print(f"Fixed: {filepath}")
        return True
    else:
        print(f"No conflicts: {filepath}")
        return False

files = [
    'frontend/src/components/AdvancedNavigation.tsx',
    'frontend/src/pages/PromptLibrary.tsx',
    'frontend/src/pages/Resources.tsx',
    'frontend/src/pages/Tools.tsx',
    'frontend/src/pages/Workflow/Workflow.tsx'
]

for f in files:
    resolve_conflicts(f)
