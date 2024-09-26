import PropTypes from "prop-types";
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  yellow: "It's yellow!",
  squeaking: "It squeaks!",
  logo: "It has a logo!",
  floating: "It floats!",
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  ItemsList.propTypes = {
    list: PropTypes.array.isRequired,
  };

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  answerItem: {
    bestFeatures,
    worstFeatures,
    consistency,
    color,
    logo,
    spendTime,
    review,
    username,
  },
}) {
  AnswersItem.propTypes = {
    answerItem: PropTypes.shape({
      bestFeatures: PropTypes.array,
      worstFeatures: PropTypes.array,
      consistency: PropTypes.string,
      color: PropTypes.string,
      logo: PropTypes.string,
      spendTime: PropTypes.array,
      review: PropTypes.string,
      username: PropTypes.string
    }).isRequired,
  };

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>

        {bestFeatures && bestFeatures.length > 0 && (
          <>
            <p>
              <em>What are the best features?</em>
            </p>
            <div>
              <ItemsList list={bestFeatures} />
            </div>
          </>
        )}

        {worstFeatures && worstFeatures.length > 0 && (
          <>
            <p>
              <em>What are the worst features?</em>
            </p>
            <div>
              <ItemsList list={worstFeatures} />
            </div>
          </>
        )}

        {consistency && consistency.trim() !== "" && (
          <p>
            <em>Consistency rating: </em>
            <span className="answer__line">{consistency}</span>
          </p>
        )}

        {color && color.trim() !== "" && (
          <p>
            <em>Color rating: </em>
            <span className="answer__line">{color}</span>
          </p>
        )}

        {logo && logo.trim() !== "" && (
          <p>
            <em>Logo rating: </em>
            <span className="answer__line">{logo}</span>
          </p>
        )}

        {spendTime && spendTime.length > 0 && (
          <>
            <p>
              <em>How to spend time?</em>
            </p>
            <div>
              <ItemsList list={spendTime} />
            </div>
          </>
        )}

        {review && review.trim() !== "" && (
          <p>
            <em>Review: </em>
            <span className="answer__line">{review}</span>
          </p>
        )}
      </article>
    </li>
  );
}
