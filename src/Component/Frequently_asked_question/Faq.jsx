import { Plus, Minus} from "lucide-react";
import { useState } from "react";
import "./Faqs.scss";
import data from "../../assets/data/Faq_data";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="faqs">
        <h1 className="h1">Frequently Asked Questions</h1>
        <div className="faqbox">
          <div className="accordion">
            {data.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h4>{item.Question}</h4>
                  <span>{selected === i ? <Minus/> : <Plus/>}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.Answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="getStarted">
          <p className="p">Ready to watch? Enter your email to create or restart your memebership. </p>
          <div className="signUpBar">
            
              <input type="email" placeholder="enter your email" className="inputBox"></input>
            
              <button className="clickBox">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;


// a more better scss styling for the above project
// .faqs {
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;

//   .h1 {
//     font-size: 24px;
//     margin-bottom: 20px;
//   }

//   .faqbox {
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     overflow: hidden;

//     .accordion {
//       border-top: 1px solid #ccc;

//       .item {
//         border-bottom: 1px solid #ccc;

//         .title {
//           padding: 15px 20px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           &:hover {
//             background-color: #f5f5f5;
//           }

//           h4 {
//             margin: 0;
//             font-size: 18px;
//           }
//         }

//         .content {
//           padding: 0 20px;
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.3s ease;

//           &.show {
//             max-height: 500px; /* adjust this value as needed */
//           }
//         }
//       }
//     }
//   }
// }
