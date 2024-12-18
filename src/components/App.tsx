
export default function App() {
  return <>
    <form>
      <field>
        <label htmlFor="total">How much was the bill?</label>
        <input id="total" name="total" type="number" min="1" max="100" step="0.1" />
      </field>
      <div>
        <label htmlFor="ownLike">How did you like the service?</label>
        <select id="ownLike" name="ownLike">
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
      <div>
        <label htmlFor="friendLike">How did you like the service?</label>
        <select id="friendLike" name="friendLike">
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
      <input type="reset" value="Reset" />
    </form>
  </>
}
