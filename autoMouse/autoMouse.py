import pyautogui
import time

print('5초마다 마우스가 움직입니다.')
print('Ctrl + C 입력시 종료합니다.')
while True:
  pyautogui.moveTo(100, 100)
  time.sleep(5)

  pyautogui.moveTo(300, 100)
  time.sleep(5)

  pyautogui.moveTo(300, 300)
  time.sleep(5)

  pyautogui.moveTo(100, 300)
  time.sleep(5)