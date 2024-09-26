import PropTypes from "prop-types";

export default function Form({ handleNewAnswer }) {
  Form.propTypes = {
    handleNewAnswer: PropTypes.func.isRequired,
  };


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const bestFeatures = formData.getAll("bestFeatures");
    const worstFeatures = formData.getAll("worstFeatures");
    const spendTime = formData.getAll("spendTime");

    const formObject = {
      bestFeatures,
      worstFeatures,
      consistency: formData.get("consistency"),
      color: formData.get("color"),
      logo: formData.get("logo"),
      spendTime,
      review: formData.get("review"),
      username: formData.get("username"),
      email: formData.get("email"),
    };

    handleNewAnswer(formObject);

    event.target.reset();
  }


  return (
    <form className="form" onSubmit={handleSubmit} >
      <h2>Tell us what you think about your rubber duck!</h2>

      <div className="form__group">
        <h3>What would you say are the best features of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="yellow" />
              It&apos;s yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="squeaking" />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="logo" />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="big" />
              It&apos;s big!
            </label>
          </li>
        </ul>
      </div>

      <div className="form__group">
        <h3>What would you say are the worst bits of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="yellow" />
              It&apos;s yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="squeaking" />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="logo" />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="big" />
              It&apos;s big!
            </label>
          </li>
        </ul>
      </div>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input
              id="consistency-one"
              type="radio"
              name="consistency"
              value="1"
            />
            <label htmlFor="consistency-one">1</label>
          </li>
          <li>
            <input
              id="consistency-two"
              type="radio"
              name="consistency"
              value="2"
            />
            <label htmlFor="consistency-two">2</label>
          </li>
          <li>
            <input
              id="consistency-three"
              type="radio"
              name="consistency"
              value="3"
            />
            <label htmlFor="consistency-three">3</label>
          </li>
          <li>
            <input
              id="consistency-four"
              type="radio"
              name="consistency"
              value="4"
            />
            <label htmlFor="consistency-four">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input id="color-one" type="radio" name="color" value="1" />
            <label htmlFor="color-one">1</label>
          </li>
          <li>
            <input id="color-two" type="radio" name="color" value="2" />
            <label htmlFor="color-two">2</label>
          </li>
          <li>
            <input id="color-three" type="radio" name="color" value="3" />
            <label htmlFor="color-three">3</label>
          </li>
          <li>
            <input id="color-four" type="radio" name="color" value="4" />
            <label htmlFor="color-four">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input id="logo-one" type="radio" name="logo" value="1" />
            <label htmlFor="logo-one">1</label>
          </li>
          <li>
            <input id="logo-two" type="radio" name="logo" value="2" />
            <label htmlFor="logo-two">2</label>
          </li>
          <li>
            <input id="logo-three" type="radio" name="logo" value="3" />
            <label htmlFor="logo-three">3</label>
          </li>
          <li>
            <input id="logo-four" type="radio" name="logo" value="4" />
            <label htmlFor="logo-four">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group">
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label>
                <input name="spendTime" type="checkbox" value="yellow" />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input name="spendTime" type="checkbox" value="squeaking" />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input name="spendTime" type="checkbox" value="logo" />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input name="spendTime" type="checkbox" value="big" />I
                don&apos;t like to spend time with it
              </label>
            </li>
          </ul>
        </div>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
