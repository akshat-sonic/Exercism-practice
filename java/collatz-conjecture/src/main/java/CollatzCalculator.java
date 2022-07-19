class CollatzCalculator {

    int computeStepCount(int start) {
//        throw new UnsupportedOperationException("Delete this statement and write your own implementation.");
        int steps = 0;
        if (start < 1) {
            throw new IllegalArgumentException("Only natural numbers are allowed");
        }
        while (start != 1) {
            start = start % 2 == 0 ? start / 2 : start * 3 + 1;
            steps++;
        }
        return steps;
    }

}
