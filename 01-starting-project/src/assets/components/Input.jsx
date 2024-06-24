export default function ({
    myClassName,
    myType,
    idName,
    labelText,
    statsChange,
}) {
    return (
        <div className={myClassName}>
            <label htmlFor={idName}>{labelText}</label>
            <input
                type={myType}
                id={idName}
                onChange={(e) => statsChange(idName, e.target.value)}
            />
        </div>
    );
}
