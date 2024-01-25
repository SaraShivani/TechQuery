// QuestionController.java
import com.google.gson.Gson;

import java.util.List;

import static spark.Spark.*;

public class QuestionController {
    private static final Gson gson = new Gson();
    private static final QuestionDAO questionDAO = new QuestionDAO();

    public static void setupEndpoints() {
        // Add a question
        post("/questions", (request, response) -> {
            String requestBody = request.body();
            Question question = gson.fromJson(requestBody, Question.class);
            questionDAO.addQuestion(question.getQuestionName());
            return "Question added successfully";
        });

        // Get all questions
        get("/questions", (request, response) -> {
            List<String> questions = questionDAO.getAllQuestions();
            return gson.toJson(questions);
        });
    }
}
