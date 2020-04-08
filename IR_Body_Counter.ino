int irPin1 = 7;
int irPin2 = 8;
int button1 = 4;
int button2 = 2;
int blinkLED = 5;
int count = 0;
int count1 = 0;
int buttonstate1=true;
int buttonstate2=true;
int lastButtonState = 0;
int lastButtonState2 = 0;
boolean state1 = true;
boolean state2 = true;
boolean insideState = false;
boolean outsideIr = false;
boolean isPeopleExiting = false;
int i = 1;
void setup() {
  Serial.begin(9600);
  pinMode(irPin1, INPUT);
  pinMode(irPin2, INPUT);
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
  pinMode(blinkLED, OUTPUT);
}

void loop() {
  delay(50);
  buttonstate1 = digitalRead(button1);
  if(buttonstate1 != lastButtonState){
    if (digitalRead(button1)==LOW) {
    count1++;
    buttonstate1=false;
    Serial.println("Store 2, entering into room: ");
    Serial.println(count1);
    //Serial.println("; ");
  }
  delay(50);
  }
   lastButtonState = buttonstate1;

  buttonstate2 = digitalRead(button2);
  if(buttonstate2 != lastButtonState2){
    if (digitalRead(button2)==LOW){
    count1--;  
    buttonstate2=false;
    Serial.println("Store 2, exiting room: ");
    Serial.println(count1);
  }
  delay(50);
  }
   lastButtonState2 = buttonstate2;
  if (count1>10){
    func();
  }
    if (!digitalRead(irPin1) && i == 1 && state1) {
      outsideIr = true;
      delay(100);
      i++;
      state1 = false;
    }

  if (!digitalRead(irPin2) && i == 2 &&   state2) {
    Serial.println("Store 1, entering into room: ");
    outsideIr = true;
    delay(100);
    i = 1 ;
    count++;
    Serial.println(count);
    //Serial.println("; ");
    state2 = false;
  }

  if (!digitalRead(irPin2) && i == 1 && state2 ) {
    outsideIr = true;
    delay(100);
    i = 2 ;
    state2 = false;
  }

  if (!digitalRead(irPin1) && i == 2 && state1 ) {
    Serial.println("Store 1, exiting from room");
    outsideIr = true;
    delay(100);
    count--;
    Serial.println(count);
    //Serial.println("; ");
    i = 1;
    state1 = false;
  }

  if (digitalRead(irPin1)) {
    state1 = true;
  }

  if (digitalRead(irPin2)) {
    state2 = true;
  }

}
void func(){
  digitalWrite(blinkLED, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(100);                       // wait for a second
  digitalWrite(blinkLED, LOW);    // turn the LED off by making the voltage LOW
  delay(200); 
}
