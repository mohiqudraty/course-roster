## Course-Registration

- ### Add at least 3 Project features ?

**Project Features:**

1. Anyone can add the course to the cart by clicking the select button.
2. We can check the duplicate selected courses
3. We can't selected or add any courses without credit.

- ### Discuss how you managed the state in your assignment project. ?

**How I Managed The State in My assignment project:**

#### My project has 5 useState. And 4 useState in my App.jsx file.

```bash
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
```

**At first i did all calculation in App.jsx then -
all useState i pass in cart component and received or destructured from cart component and set on cart like:**

- Destructured All

```bash
const Cart = ({ selectCourse, totalCredit, remainingCredit, totalPrice }) =>{}

```

- Set All Value Like This-

```bash
 <h3>
    Credit Hour Remaining {remainingCredit} hr
 </h3>
```

**One useState in my Cards.jsx file.**

Like This-

```bash
const [cardData, setCardData] = useState([]);
```

this useState for storing my all fetching data. firstly i store the data with this useState then i set the data on my cart.

### Special Note.

all useState calculate when i click on selectHandle function / select button. and passing all useState with handle click function . if we don't click on select button we will not get/show any output.
