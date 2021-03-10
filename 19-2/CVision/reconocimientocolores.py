import sys
from PyQt5 import QtGui
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
import cv2
import numpy as np


class Window(QWidget):
    def __init__(self):
        super().__init__()

        self.title = "proyecto de acecom"
        self.top = 50
        self.left = 50
        self.width = 100
        self.height = 300
        self.setWindowIcon(QtGui.QIcon("uni.jpg"))
        self.InitWindow()

    def InitWindow(self):
        self.setWindowTitle(self.title)
        self.setGeometry(self.top, self.left, self.width, self.height)

        vBox = QVBoxLayout()

        Titulo = QLabel("TITULO", self)
        Titulo.setAlignment(Qt.AlignCenter)
        vBox.addWidget(Titulo)

        self.Horizontal1Layout()
        vBox.addWidget(self.parte1)

        imgen1 = QPixmap("flor3.jpg")
        label = QLabel()
        label.setPixmap(imgen1)
        self.resize(label.pixmap().size())
        vBox.addWidget(label)

        self.setLayout(vBox)

        self.barra1.valueChanged.connect(self.hsv)
        self.barra2.valueChanged.connect(self.hsv)
        self.barra3.valueChanged.connect(self.hsv)
        self.barra4.valueChanged.connect(self.hsv)
        self.barra5.valueChanged.connect(self.hsv)
        self.barra6.valueChanged.connect(self.hsv)
        self.show()
        self.show()

    def hsv(self):
        self.img = cv2.imread("flor3.jpg")

        h1 = self.barra1.value()
        s1 = self.barra2.value()
        v1 = self.barra3.value()
        h2 = self.barra4.value()
        s2 = self.barra5.value()
        v2 = self.barra6.value()

        redBajo1 = np.array([h1, s1, v1], np.uint8)
        redAlto1 = np.array([h2, s2, v2], np.uint8)

        imgProc = cv2.cvtColor(self.img, cv2.COLOR_BGR2HSV)

        maskC = cv2.inRange(imgProc, redBajo1, redAlto1)

        maskv = cv2.bitwise_and(self.img, self.img, mask=maskC)

        cv2.imshow('Bitwise', maskv)

        key = cv2.waitKey(0)

    def Horizontal1Layout(self):
        self.parte1 = QGroupBox()
        hlayout = QHBoxLayout()

        self.Grid1()
        hlayout.addWidget(self.colores)

        self.parte1.setLayout(hlayout)

    def Grid1(self):
        self.colores = QGroupBox(" ")
        grid = QGridLayout()

        hue1 = QLabel("hue 1", self)
        grid.addWidget(hue1, 0, 0)

        self.barra1 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra1)
        grid.addWidget(self.barra1, 0, 1)

        sat1 = QLabel("saturation 1", self)
        grid.addWidget(sat1, 1, 0)

        self.barra2 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra2)
        grid.addWidget(self.barra2, 1, 1)

        val1 = QLabel("value 1", self)
        grid.addWidget(val1, 2, 0)

        self.barra3 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra3)
        grid.addWidget(self.barra3, 2, 1)

        hue2 = QLabel("hue 2", self)
        grid.addWidget(hue2, 3, 0)

        self.barra4 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra4)
        grid.addWidget(self.barra4, 3, 1)

        sat2 = QLabel("saturation 2", self)
        grid.addWidget(sat2, 4, 0)

        self.barra5 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra5)
        grid.addWidget(self.barra5, 4, 1)

        val2 = QLabel("value 2", self)
        grid.addWidget(val2, 5, 0)

        self.barra6 = QSlider(Qt.Horizontal)
        self.formbarra(self.barra6)
        grid.addWidget(self.barra6, 5, 1)

        self.colores.setLayout(grid)

    def formbarra(self, barra):
        barra.setMinimum(0)
        barra.setMaximum(255)
        barra.setTickPosition(QSlider.TicksBelow)
        barra.setTickInterval(51)

if __name__ == '__main__':
    App = QApplication(sys.argv)
    window = Window()
    sys.exit(App.exec())
