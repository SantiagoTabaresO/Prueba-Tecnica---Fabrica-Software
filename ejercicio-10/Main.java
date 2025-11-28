import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Student estudiante1 = new Student("Ana", 1, Arrays.asList(8.5, 9.0, 7.5));
        Student estudiante2 = new Student("Juan", 2, Arrays.asList(6.0, 7.0, 8.0));

        System.out.println(estudiante1.getNombre() + " tiene promedio: " + estudiante1.getPromedio());
        System.out.println(estudiante2.getNombre() + " tiene promedio: " + estudiante2.getPromedio());
    }
}
