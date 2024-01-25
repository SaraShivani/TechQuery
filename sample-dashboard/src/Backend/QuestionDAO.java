import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class QuestionDAO {
    private Connection connection;

    // Constructor to initialize the database connection
    public QuestionDAO() {
        this.connection = DatabaseConnection.initializeDatabase();
    }


    // Method to insert a new question into the database
    public void addQuestion(Question question) {
        String sql = "INSERT INTO questions (name, topic, codeSnippet) VALUES (?, ?, ?)";

        try (PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, question.getName());
            statement.setString(2, question.getTopic());
            statement.setString(3, question.getCodeSnippet());

            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating question failed, no rows affected.");
            }

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    question.setId(generatedKeys.getInt(1));
                } else {
                    throw new SQLException("Creating question failed, no ID obtained.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Method to retrieve all questions from the database
    public List<Question> getAllQuestions() {
        List<Question> questions = new ArrayList<>();
        String sql = "SELECT * FROM questions";

        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {

            while (resultSet.next()) {
                Question question = new Question();
                question.setId(resultSet.getInt("id"));
                question.setName(resultSet.getString("name"));
                question.setTopic(resultSet.getString("topic"));
                question.setCodeSnippet(resultSet.getString("codeSnippet"));

                questions.add(question);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return questions;
    }
}
