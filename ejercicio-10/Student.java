// Clase Student: representa a un estudiante con nombre, ID y lista de notas
import java.util.List;

public class Student {
    // Encapsulamiento: atributos privados
    private String nombre;
    private int id;
    private List<Double> notas;

    // Constructor: inicializa el estudiante
    public Student(String nombre, int id, List<Double> notas) {
        this.nombre = nombre;
        this.id = id;
        this.notas = notas;
    }

    // Getters y setters (para respetar encapsulamiento)
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Double> getNotas() {
        return notas;
    }

    public void setNotas(List<Double> notas) {
        this.notas = notas;
    }

    // Método de negocio: calcular promedio de notas
    public double getPromedio() {
        if (notas == null || notas.isEmpty()) {
            return 0; // Evitar división por cero
        }

        double suma = 0;
        for (double nota : notas) {
            suma += nota;
        }

        return suma / notas.size();
    }
}

