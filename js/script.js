var car = {
             make: 'VW',
             type: 'Polo',
             colour: 'blue',
             isOn: false,
             numOfWheels: 4,
             seats: ['seat1',
                     'seat2',
                     'seat3',
                     'seat4'],
             ignition: function () {
                 if (this.isOn) {
                     this.isOn = false;
                 } else {
                     this.isOn = true;
                 }
                 console.log(this.isOn);
             },
             fly: function() {
                 if (this.isOn) {
                     alert('fly');
                 } else {
                     console.log("Car isn't turned on");
                 }
             }
         };
