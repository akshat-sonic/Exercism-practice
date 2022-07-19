class PrimeCalculator {

    boolean isPrime(int k)
    {
        if (k <= 1)
            return false;
        if (k==2 || k==3)
            return true;
        if (k % 2 == 0 || k % 3 == 0)
            return false;
        for (int i = 5; i * i <= k; i = i + 6) {
            if (k % i == 0 || k % (i + 2) == 0)
                return false;
        }
        return true;
    }
    int nth(int nth) {
        int i=2;
        if(nth<=0)
        {
            throw new IllegalArgumentException();
        }
        while(nth>0)
        {
            if(isPrime(i))
                nth--;

            i++;
        }
        i-=1;
        return i;
    }
}
