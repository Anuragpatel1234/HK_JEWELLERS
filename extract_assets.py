import os
from PIL import Image

def slice_assets():
    img = Image.open('ui.jpeg').convert('RGB')
    width, height = img.size
    print(f"Source Image: {width} x {height}")

    # Output directory
    base_out = 'public/assets'
    os.makedirs(f"{base_out}/hero", exist_ok=True)
    os.makedirs(f"{base_out}/categories", exist_ok=True)
    os.makedirs(f"{base_out}/story", exist_ok=True)
    os.makedirs(f"{base_out}/customisation", exist_ok=True)
    os.makedirs(f"{base_out}/divine", exist_ok=True)
    os.makedirs(f"{base_out}/footer", exist_ok=True)
    os.makedirs(f"{base_out}/header", exist_ok=True)

    # 1. Header Logo
    # Y roughly 24 to 68, center
    logo_crop = img.crop((320, 24, 440, 68))
    logo_crop.save(f"{base_out}/header/hk_logo.png", quality=95)

    # 2. Hero Section
    # Hero spans from Y=128 to Y=468, full width
    hero_crop = img.crop((0, 126, width, 468))
    hero_crop.save(f"{base_out}/hero/hero_banner.jpg", quality=95)

    # Left jewellery bust on mannequin
    hero_bust = img.crop((20, 134, 270, 466))
    hero_bust.save(f"{base_out}/hero/hero_bust.png", quality=95)

    # Right palace structure & background
    hero_palace = img.crop((260, 134, width, 466))
    hero_palace.save(f"{base_out}/hero/hero_palace.jpg", quality=95)

    # 3. Category Carousel Cards (7 cards)
    # Cards span Y=530 to Y=660
    # There are 7 cards horizontally:
    # 1: Necklaces (~12 to ~110)
    # 2: Earrings (~115 to ~215)
    # 3: Bangles (~220 to ~320)
    # 4: Banges (~325 to ~425)
    # 5: Rings (~430 to ~530)
    # 6: Nose Pins (~535 to ~635)
    # 7: Bracelets (~640 to ~745)
    cat_y1 = 533
    cat_y2 = 660
    cat_names = [
        ('necklaces', 12, 110),
        ('earrings', 115, 213),
        ('bangles', 220, 318),
        ('banges', 325, 423),
        ('rings', 430, 528),
        ('nose_pins', 535, 633),
        ('bracelets', 640, 745)
    ]
    for name, x1, x2 in cat_names:
        c = img.crop((x1, cat_y1, x2, cat_y2))
        c.save(f"{base_out}/categories/{name}.jpg", quality=95)

    # 4. Heritage Story Section
    # Y = 672 to Y = 980
    # Left main card: Swarn Shringaar
    story_left = img.crop((12, 672, 378, 980))
    story_left.save(f"{base_out}/story/swarn_shringaar.jpg", quality=95)

    # Right top: Parampara
    story_parampara = img.crop((386, 672, 745, 822))
    story_parampara.save(f"{base_out}/story/parampara.jpg", quality=95)

    # Right bottom: Chhankaar
    story_chhankaar = img.crop((386, 830, 745, 980))
    story_chhankaar.save(f"{base_out}/story/chhankaar.jpg", quality=95)

    # 5. Jewellery Customisation Section (4 cards)
    # Cards span Y=1032 to Y=1182
    # 4 cards horizontally:
    # 1: ~24 to ~200
    # 2: ~204 to ~376
    # 3: ~380 to ~552
    # 4: ~556 to ~732
    cust_y1 = 1032
    cust_y2 = 1182
    cust_boxes = [
        ('custom_1_choker', 24, 200),
        ('custom_2_kadas', 204, 376),
        ('custom_3_earrings', 380, 552),
        ('custom_4_necklace', 556, 732)
    ]
    for name, x1, x2 in cust_boxes:
        c = img.crop((x1, cust_y1, x2, cust_y2))
        c.save(f"{base_out}/customisation/{name}.jpg", quality=95)

    # 6. Divine Idols Banner
    # Banner spans Y=1264 to Y=1374
    divine_banner = img.crop((0, 1264, width, 1374))
    divine_banner.save(f"{base_out}/divine/divine_banner.jpg", quality=95)

    # Ganesha idol cut-out / focal crop
    ganesha_crop = img.crop((90, 1270, 240, 1370))
    ganesha_crop.save(f"{base_out}/divine/ganesha_idol.png", quality=95)

    print("All assets sliced successfully!")

if __name__ == '__main__':
    slice_assets()
