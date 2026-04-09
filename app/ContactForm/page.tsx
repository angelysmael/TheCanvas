import Form from 'next/form'

export default function ContactForm() {
  return (
    <div>
      <h1>Contact Form</h1>
      <p>
        This is a CONTACT FORM. 
      </p>

      <br></br>
      <p>
        Form component sample:
      </p>

      <Form action="/search" className="flex items-center gap-2 max-w-sm">
      <input name="query" />
      <button type="submit" className="rounded-lg border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">Submit</button>
      </Form>
      
    </div>
  );
}