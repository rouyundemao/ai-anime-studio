import json
import requests
import time

# 加载工作流
with open('D:\\雾的工作室\\项目\\AI 动漫制作全流程\\ai-anime-studio\\data\\local\\文生图 - 新\\workflow.json', 'r', encoding='utf-8') as f:
    workflow = json.load(f)

# 设置提示词
prompt_text = "一个红色圆形图标，调色板图案，简洁扁平化设计，白色背景，适合做网站 favicon，无文字，高清细节"

for node_id, node in workflow.items():
    if 'CLIPTextEncode' in node.get('class_type', ''):
        node['inputs']['text'] = prompt_text
    # 设置尺寸为 512x512
    if 'EmptyLatentImage' in node.get('class_type', ''):
        node['inputs']['width'] = 512
        node['inputs']['height'] = 512

# 提交
resp = requests.post('http://127.0.0.1:8000/prompt', json={"prompt": workflow})
prompt_id = resp.json()['prompt_id']

print(f"任务提交成功，prompt_id: {prompt_id}")
print("正在等待生成...")

# 查询结果
for i in range(60):
    time.sleep(1)
    history = requests.get(f'http://127.0.0.1:8000/history/{prompt_id}').json()
    if prompt_id in history:
        result = history[prompt_id]
        if 'outputs' in result:
            for node_id, output in result['outputs'].items():
                if 'images' in output:
                    for img in output['images']:
                        if 'filename' in img:
                            filename = img['filename']
                            print(f"生成成功！文件：{filename}")
                            exit(0)
    print(f"等待中... {i+1}/60")

print("超时，任务未完成")
