
import os

style_path = r'c:\Users\FSOS\Desktop\siteler\styles.css'
new_style_path = r'c:\Users\FSOS\Desktop\siteler\new_styles_temp.css'

with open(style_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to keep lines 0 to 191 (first 192 lines)
# Lines are 0-indexed in list, so index 191 is the 192nd line.
# Previous file content showed line 192 is "/* Hero Section */"
# So we want to keep up to line 191 (index 190).
# Let's check index 191 (line 192):
# In Step 37, line 192 was "/* Hero Section */".
# So we slice lines[:191] to keep up to line 191.
# Wait, let's verify.
# line 1 is index 0.
# line 191 is index 190.
# line 192 is index 191.
# So lines[:191] gives 0..190, which is 191 lines.
# If line 192 is the start of what we remove, that's correct.

# Then we find where to resume.
# We decided line 382 is "/* Sections */".
# So we want to resume at line 382.
# line 382 is index 381.
# So lines[381:] should be the rest.
# Let's verify line 382 in Step 42.
# 382: /* Sections */
# So yes, we want to keep from 382 onwards.

pre_content = lines[:191]
post_content = lines[381:]

with open(new_style_path, 'r', encoding='utf-8') as f:
    new_content = f.readlines()

final_content = pre_content + new_content + post_content

with open(style_path, 'w', encoding='utf-8') as f:
    f.writelines(final_content)

print("Successfully updated styles.css")
