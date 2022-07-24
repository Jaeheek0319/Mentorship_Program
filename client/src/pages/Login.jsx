import Credentials from "../components/Credentials";

export default function Login() {
  return (
    <>
      <div className="credential-background">
        <div className="credential-container position-absolute credential">
          <Credentials />
        </div>
        <div className="credential-text-position">
          <p className="credential-name">[App name]</p>
          <p className="credential-text">
            Connect With and Serve Your Community
          </p>
          <p className="credential-text">
            Help And Recieve Help From Your Family
          </p>
        </div>
      </div>
    </>
  );
}
