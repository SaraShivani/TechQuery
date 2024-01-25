import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    public static Connection initializeDatabase() throws SQLException, ClassNotFoundException {
        String jdbcURL = "jdbc:mysql://localhost:3306/techquerydb";
        String dbUser = "root";
        String dbPassword = "123456";

        // Load the JDBC driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establish a connection
        Connection connection = DriverManager.getConnection(jdbcURL, dbUser, dbPassword);

        return connection;
    }
}
