export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <label className={`item ${isChecked ? 'checked' : ''}`} htmlFor={`checkbox-${index}`}>
      <span className="item-label">{label}</span>
      <input
        className="visually-hidden"
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <span className="checkbox-box" aria-hidden="true">
        <svg className="check-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </label>
  )
}
