package uiapp;

public class demo {
    public static void main(String[] args) {
        int[] dice1 = {1, 3, 4, 5, 6, 8};
        int[] dice2 = {1, 2, 2, 3, 3, 4};
    
        System.out.println("Custom Dice Probabilities:");
        calculateCustomDiceProbabilities(dice1, dice2);
    
        System.out.println("\nStandard Dice Probabilities:");
        calculateStandardDiceProbabilities();
    }
    


public static void calculateCustomDiceProbabilities(int[] dice1, int[] dice2) {
    int[] sumCounts = new int[13]; // Array to count occurrences of each sum

    for (int face1 : dice1) {
        for (int face2 : dice2) {
            int sum = face1 + face2;
            sumCounts[sum]++;
        }
    }

    // Calculate and print probabilities
    for (int i = 2; i < sumCounts.length; i++) { // Start from 2 because sums can be 2 to 12
        double probability = (double) sumCounts[i] / (dice1.length * dice2.length);
        System.out.printf("Sum %d: Probability = %.2f%n", i, probability);
    }
}

public static void calculateStandardDiceProbabilities() {
    int[] sumCounts = new int[13]; // Array to count occurrences of each sum

    for (int i = 1; i <= 6; i++) {
        for (int j = 1; j <= 6; j++) {
            int sum = i + j;
            sumCounts[sum]++;
        }
    }

    for (int i = 2; i < sumCounts.length; i++) { 
        double probability = (double) sumCounts[i] / (6 * 6);
        System.out.printf("Sum %d: Probability = %.2f%n", i, probability);
    }
}


}