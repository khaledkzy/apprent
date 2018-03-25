export function formatAsCurrency(number) {
    return '£' + Math.round(number );
}

export function spareRoomCalculator(number_of_rooms){
    return Math.ceil(Math.random()*(number_of_rooms-1))
}