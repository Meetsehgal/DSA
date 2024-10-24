export default function ServiceContactForm() {
    return (

        <div className="col-lg-8 service-conact-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="TYPE YOUR CONCERN (Optional)" rows="10"></textarea>
            <div className="text-center">
                <button type="submit"> Submit</button>
            </div>
        </div>

    )
}