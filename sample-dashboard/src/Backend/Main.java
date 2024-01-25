public class Main {
    public static void main(String[] args) {
        QuestionDAO questionDAO = new QuestionDAO();
        List<Question> questions = questionDAO.getAllQuestions();

        for (Question question : questions) {
            System.out.println("Question ID: " + question.getId() + ", Name: " + question.getName());
            // Print other properties accordingly
        }
    }
}
