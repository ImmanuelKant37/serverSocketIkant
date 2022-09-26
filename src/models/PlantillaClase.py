##Ejemplo de clase persona
class Persona:
    #CONSTRUCTORES -- ATRIBUTOS DE LA CLASE  -- PROPIEDADES
    def __init__(self,nombre_parametro,edad_parametro,estado_parametro,adjetivos_parametro ):
        self.nombre = str(nombre_parametro)
        self.edad= int(edad_parametro)
        self.adjetivos = list(adjetivos_parametro)
        self.estado = bool(estado_parametro)
    #SETTERS -- SETEAN -- ESTABLECEN -- DEFINEN
    def setear_nombre(self, nombre_nuevo):
        self.nombre = nombre_nuevo

    def setear_estado(self, estado_nuevo):
        self.estado = estado_nuevo

    def setear_edad(self, edad_nueva):
        self.edad = edad_nueva

    def agregar_adjetivos(self, adjetivo):
        self.adjetivos.append(adjetivo)

    def remover_adjetivos(self, indice):
        self.adjetivos.pop(indice)
    #GETTERS -- OBTENER -- CONSULTAS
    def obtener_nombre(self):
        return self.nombre
    def obtener_estado(self):
        return self.estado
    def obtener_lista_adjetivos(self):
        return self.adjetivos
    def obtener_edad(self):
        return self.edad
    
Yami = Persona('Yami', 25,  False, [1,2,3,4,5])
Juan = Persona('Juan', 26, True, [1,2,3,4,5])
Yami.setear_nombre('Yamila')

Yami.remover_adjetivos(3)
Yami.remover_adjetivos(2)
print(Yami.obtener_lista_adjetivos())

print('Bienvenida', Yami.obtener_nombre())

print('Bienvenido', Juan.obtener_nombre())