function airPlaneSeatReservation(N, S){
    let seatAllocated = N * 3;

    if (S.includes(" ")) {
        let splitSeatReservation = S.split(" ");
        if (splitSeatReservation != null) {
            for (let i = 0; i < splitSeatReservation.length; i++) {
                let seatReservation = splitSeatReservation[i];
                let col = seatReservation.charAt(1);
                if ((col == 'A' || col == 'B' || col == 'C') 
                                || (col == 'E' || col == 'F') 
                                || (col == 'H' || col == 'J' || col == 'K'))
                    seatAllocated -= 1;
            }
        }
    }

    return seatAllocated;
}