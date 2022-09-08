const productosTotales = [
    { id: 11001, nombre: "Asus GTX 1660S", linea: "GTX 1660", modelo: "GTX 1660S", marca: "Asus", img: "https://i.ibb.co/1mH4fdk/asus-1660s-01-ph.jpg", precio: 410, cantidad: 5 },
    { id: 11002, nombre: "EVGA GTX 1660S", linea: "GTX 1660", modelo: "GTX 1660S", marca: "EVGA", img: "https://i.ibb.co/VSkXtCT/evga-1660s-01-ph.jpg", precio: 370, cantidad: 10 },
    { id: 11003, nombre: "GALAX GTX 1660Ti", linea: "GTX 1660", modelo: "GTX 1660Ti", marca: "GALAX", img: "https://i.ibb.co/f10yc2R/galax-1660ti-01-ph.jpg", precio: 400, cantidad: 12 },
    { id: 11004, nombre: "MSI GTX 1660S", linea: "GTX 1660", modelo: "GTX 1660S", marca: "MSI", img: "https://i.ibb.co/Q6MWRDk/msi-1660s-01-ph.jpg", precio: 460, cantidad: 8 },
    { id: 11005, nombre: "Palit GTX 1660Ti", linea: "GTX 1660", modelo: "GTX 1660Ti", marca: "Palit", img: "https://i.ibb.co/h8Pn25b/palit-1660ti-01-ph.jpg", precio: 510, cantidad: 6 },

    { id: 11006, nombre: "EVGA RTX 2060", linea: "RTX 2060", modelo: "RTX 2060", marca: "EVGA", img: "https://i.ibb.co/B2wNybT/evga-2060-01-ph.jpg", precio: 540, cantidad: 3 },

    { id: 11007, nombre: "Asus RTX 3050", linea: "RTX 3050", modelo: "RTX 3050", marca: "Asus", img: "https://i.ibb.co/LZFSDjK/asus-3050-01-ph.jpg", precio: 520, cantidad: 0 },
    { id: 110010, nombre: "Palit RTX 3050", linea: "RTX 3050", modelo: "RTX 3050", marca: "Palit", img: "https://i.ibb.co/Nm9gSYS/palit-3050-01-ph.jpg", precio: 580, cantidad: 2 },

    { id: 11011, nombre: "Asus RTX 3060", linea: "RTX 3060", modelo: "RTX 3060", marca: "Asus", img: "https://i.ibb.co/jrc5z8Z/asus-3060-01-ph.jpg", precio: 650, cantidad: 7 },
    { id: 11012, nombre: "Asus RTX 3060Ti", linea: "RTX 3060", modelo: "RTX 3060Ti", marca: "Asus", img: "https://i.ibb.co/DbXfvbY/asus-3060ti-01-ph.jpg", precio: 820, cantidad: 6 },
    { id: 11013, nombre: "Galax RTX 3060", linea: "RTX 3060", modelo: "RTX 3060", marca: "Galax", img: "https://i.ibb.co/XsJWg6W/galax-3060-01-ph.jpg", precio: 550, cantidad: 5 },
    { id: 11014, nombre: "Palit RTX 3060", linea: "RTX 3060", modelo: "RTX 3060", marca: "Palit", img: "https://i.ibb.co/C2GJNRK/palit-3060-01-ph.jpg", precio: 620, cantidad: 10 },
    { id: 11015, nombre: "Palit RTX 3060Ti", linea: "RTX 3060", modelo: "RTX 3060Ti", marca: "Palit", img: "https://i.ibb.co/dPn7P0x/palit-3060ti-01-ph.jpg", precio: 680, cantidad: 5 },

    { id: 11016, nombre: "Asus RTX 3070", linea: "RTX 3070", modelo: "RTX 3070", marca: "Asus", img: "https://i.ibb.co/7r1pWf6/asus-3070-01-ph.jpg", precio: 830, cantidad: 6 },
    { id: 11017, nombre: "Asus RTX 3070Ti", linea: "RTX 3070", modelo: "RTX 3070Ti", marca: "Asus", img: "https://i.ibb.co/SRfXV8B/asus-3070ti-01-ph.jpg", precio: 1100, cantidad: 9 },
    { id: 11020, nombre: "Galax RTX 3070", linea: "RTX 3070", modelo: "RTX 3070", marca: "Galax", img: "https://i.ibb.co/dktnW9t/galax-3070-01-ph.jpg", precio: 890, cantidad: 12 },
    { id: 11021, nombre: "Palit RTX 3070", linea: "RTX 3070", modelo: "RTX 3070", marca: "Palit", img: "https://i.ibb.co/NN1bXfC/palit-3070-01-ph.jpg", precio: 950, cantidad: 10 },
    { id: 11022, nombre: "Palit RTX 3070Ti", linea: "RTX 3070", modelo: "RTX 3070Ti", marca: "Palit", img: "https://i.ibb.co/BghM2tn/palit-3070ti-01-ph.jpg", precio: 1040, cantidad: 4 },

    { id: 11023, nombre: "Asus RTX 3080", linea: "RTX 3080", modelo: "RTX 3080", marca: "Asus", img: "https://i.ibb.co/P5ZDJvJ/asus-3080-01-ph.jpg", precio: 1020, cantidad: 3 },
    { id: 11024, nombre: "Asus RTX 3080Ti", linea: "RTX 3080", modelo: "RTX 3080Ti", marca: "Asus", img: "https://i.ibb.co/6rck2TX/asus-3080ti-01-ph.jpg", precio: 2100, cantidad: 4 },
    { id: 11025, nombre: "MSI RTX 3080", linea: "RTX 3080", modelo: "RTX 3080", marca: "MSI", img: "https://i.ibb.co/WV11gJf/msi-3080-01-ph.jpg", precio: 1400, cantidad: 2 },

    { id: 11026, nombre: "Asus RTX 3090Ti", linea: "RTX 3090", modelo: "RTX 3090Ti", marca: "Asus", img: "https://i.ibb.co/jkD3cpj/asus-3090ti-01-ph.jpg", precio: 2580, cantidad: 1 },
    { id: 11027, nombre: "MSI RTX 3090", linea: "RTX 3090", modelo: "RTX 3090", marca: "Asus", img: "https://i.ibb.co/bRyh5v0/asus-3090-01-ph.jpg", precio: 2000, cantidad: 0 },
]

