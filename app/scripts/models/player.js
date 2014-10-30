define(function(){

    function player(player){
        this.name = player.name;
        this.lastName = player.lastName;
        this.birthday = player.birthday;
        this.age = player.age;
        this.fieldPosition = player.fieldPosition;
        this.backNumber = player.backNumber;
        this.skillfulLeg = player.skillfulLeg;
        this.footballClubFans = player.footballClubFans;
        this.avatar = player.avatar;
    };

    return player;
});