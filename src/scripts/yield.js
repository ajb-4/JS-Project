//Scrap Work Code

//SJIU2BU3OS272LAE
//MKK0K02W1J79A7UI
//GBZGO0T0WE931AOX
`<div class="scenario" id="scenario${this.num}">
<div class="investmentbox">
  <label for="">Investment Amount:
    <input type="number" name="invAmount" id="invAmount${this.num}">
  </label>
  <br>
  <label for="">Start Year:
    <input type="number" name="startDate" id="startDate${this.num}">
  </label>
</div>

<div class="vehiclebox">
  <label for="">Duration:
    <input type="number" name="duration" id="duration${this.num}">
  </label>
  <br>
  <label for="">Vehicle:
    <input type="text" name="invVehicle" id="invVehicle${this.num}">
  </label>
  <br>
  <input type="button" value="Show Yield" class="testbuttonyield" id="testbuttonyield${this.num}">
  <br>
  <div id="apifetcher${this.num}">Total Yield</div>
</div>


<div class="yieldbox">
  <input type="button" value="Customize My Basket" class="customizebasket" id="customizebasket${this.num}">
  <br>
  <input type="button" value="Show Me The Goods!" class="testbuttongoods" id="testbuttongoods${this.num}">
  <br>
  <div id="apifetch${this.num}">Goods Hash</div>
</div>
<input type="button" value="Delete Scenario ${this.num}" class="deleteScenario" id="deleteScenario${this.num}">
</div>

        <div class="modalcontainer" id="modalcontainer${this.num}">
          <div class="modal${this.num}">
            <p>Please select your basket of goods. Values are percentages and therefore must add up to 100. </p>
            <label for="">Wheat:
              <input type="number" name="wheatmodal" id="wheatmodal${this.num}">
            </label>
            <label for="">Corn:
              <input type="number" name="cornmodal" id="cornmodal${this.num}">
            </label>
            <label for="">Sugar:
              <input type="number" name="sugarmodal" id="sugarmodal${this.num}">
            </label>
            <label for="">Coffee:
              <input type="number" name="coffeemodal" id="coffeemodal${this.num}">
            </label>
            <input type="button" value="Close Basket" id="exitmodal${this.num}">
          </div>
        </div>`