const eventHub = document.querySelector("#container")







const contentElement = document.querySelector("#stateSelect")

export const StateSelect = () => {
    contentElement.innerHTML = `
    <option value="0">Select a State</option>
    <option id="AL" value="1">Alabama</option>
    <option id="AK" value="2">Alaska</option>
    <option id="AZ" value="3">Arizona</option>
    <option id="AR" value="4">Arkansas</option>
    <option id="CA" value="5">California</option>
    <option id="CO" value="6">Colorado</option>
    <option id="CT" value="7">Connecticut</option>
    <option id="DE" value="8">Deleware</option>
    <option id="FL" value="9">Florida</option>
    <option id="GA" value="10">Georgia</option>
    <option id="HI" value="11">Hawaii</option>
    <option id="ID" value="12">Idaho</option>
    <option id="IL" value="13">Illinois</option>
    <option id="IN" value="14">Indiana</option>
    <option id="IA" value="15">Iowa</option>
    <option id="KS" value="16">Kansas</option>
    <option id="KY" value="17">Kentucky</option>
    <option id="LA" value="18">Louisiana</option>
    <option id="ME" value="19">Maine</option>
    <option id="MD" value="20">Maryland</option>
    <option id="MA" value="21">Massachusetts</option>
    <option id="MI" value="22">Michigan</option>
    <option id="MN" value="23">Minnesota</option>
    <option id="MS" value="24">Mississippi</option>
    <option id="MO" value="25">Missouri</option>
    <option id="MT" value="26">Montana</option>
    <option id="NE" value="27">Nebraska</option>
    <option id="NV" value="28">Nevada</option>
    <option id="NH" value="29">New Hampshire</option>
    <option id="NJ" value="30">New Jersey</option>
    <option id="NM" value="31">New Mexico</option>
    <option id="NY" value="32">New York</option>
    <option id="NC" value="33">North Carolina</option>
    <option id="ND" value="34">North Dakota</option>
    <option id="OH" value="35">Ohio</option>
    <option id="OK" value="36">Oklahoma</option>
    <option id="OR" value="37">Oregon</option>
    <option id="PA" value="38">Pennsylvania</option>
    <option id="RI" value="39">Rhode Island</option>
    <option id="SC" value="40">South Carolina</option>
    <option id="SD" value="41">South Dakota</option>
    <option id="TN" value="42">Tennessee</option>
    <option id="TX" value="43">Texas</option>
    <option id="UT" value="44">Utah</option>
    <option id="VT" value="45">Vermont</option>
    <option id="VA" value="46">Virginia</option>
    <option id="WA" value="47">Washington</option>
    <option id="WV" value="48">West Virginia</option>
    <option id="WI" value="49">Wisconsin</option>
    <option id="WY" value="50">Wyoming</option>

   ` 
}


const stateSelector = document.getElementById("stateSelect")

stateSelector.addEventListener("change", e => {
        const stateID = stateSelector.value
        const state = stateSelector.options[stateSelect.selectedIndex].text
        const stateCode = stateSelector.options[stateSelect.selectedIndex].id
        const stateBroadcast = new CustomEvent("broadcastState", {
            detail: {
                state: state,
                stateCode: stateCode,
                idNumber: stateID
            }
        })
        eventHub.dispatchEvent(stateBroadcast)
    })
