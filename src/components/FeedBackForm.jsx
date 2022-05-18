import Card from "./shared/Card"
import Button from "./shared/Button"
import SelectList from "./SelectList"

function FeedBackForm() {
  return (
    <Card>
        <form>
            <h3>How would you like to rate our service?</h3>
            <SelectList />
            <div className="input-group ">
                <input type="text" placeholder="Your Feedback" />
                <Button type="submit" version="secondary"> Send </Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedBackForm