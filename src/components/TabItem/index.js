// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, selectedActiveTab, isActive} = props
  const {tabId, displayText} = tabItemDetails
  const onClickTabItem = () => {
    selectedActiveTab(tabId)
  }
  const activeTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-items">
      <button
        className={`${activeTab} tab-btn`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
