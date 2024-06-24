import Input from './Input.jsx';

export default function UserInput({ statsChange, statsObj }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input
                    myClassName="singleInput"
                    myType="number"
                    idName="initialInvestment"
                    labelText="Initial Investment"
                    statsChange={statsChange}
                />

                <Input
                    myClassName="singleInput"
                    myType="number"
                    idName="annualInvestment"
                    labelText="Annual Investment"
                    statsChange={statsChange}
                />
            </div>
            <div className="input-group">
                <Input
                    myClassName="singleInput"
                    myType="number"
                    idName="expectedReturn"
                    labelText="Expected return"
                    statsChange={statsChange}
                />

                <Input
                    myClassName="singleInput"
                    myType="number"
                    idName="duration"
                    labelText="duration"
                    statsChange={statsChange}
                />
            </div>
        </div>
    );
}
