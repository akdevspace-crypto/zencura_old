import os
from PIL import Image

def remove_white_bg(infile, outfile, threshold=230):
    if not os.path.exists(infile):
        print(f"File not found: {infile}")
        return
    img = Image.open(infile).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            # calculate alpha for a softer edge 
            diff = (item[0] + item[1] + item[2]) / 3.0
            if diff >= 253:
                alpha = 0
            else:
                alpha = int(255 * (255 - diff) / (255 - threshold))
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(outfile, "PNG")
    print(f"Saved {outfile}")

remove_white_bg(r"e:\Akash\Web_project\Artibots\Project\Zencura\zencura-web\public\generated_inkwell.png", r"e:\Akash\Web_project\Artibots\Project\Zencura\zencura-web\public\inkwell_transparent.png")
