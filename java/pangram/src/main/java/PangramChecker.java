public class PangramChecker {

    public boolean isPangram(String input) {
//        throw new UnsupportedOperationException("Delete this statement and write your own implementation.");
        for(char c = 'A'; c <= 'Z'; c++) {
            if(input.indexOf(c) < 0 && input.indexOf(32+c) < 0) {
                return false;
            }
        }
        return true;
    }

}
