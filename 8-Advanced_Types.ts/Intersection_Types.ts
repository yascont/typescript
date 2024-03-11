interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
    name: "yassie",
    credit: 100000,
    email: "hello@hello.com",
    phone: "0634567890"
};

function takeCustomer(customer: Customer): void {
    console.log(customer.name, customer.credit, customer.email, customer.phone);
}

takeCustomer(customer);
