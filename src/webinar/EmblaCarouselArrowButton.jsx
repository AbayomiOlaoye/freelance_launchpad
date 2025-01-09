export const Thumb = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        type="button"
        onClick={() => onClick(index)}
        className="embla-thumbs__slide__number min-w-[50px]"
      >
        {index + 1}
      </button>
    </div>
  )
}
