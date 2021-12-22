import Terms from "../components/terms/index";
import Banner from "../components/banner/index";
export default function Home() {
  const data = {
    image: `/dummy.png`,
    head: `Terms of use`,
  };
  const data1 = {
    paragraph1: `   www.geuhospital.com is operated by Graphic Era Hospital, Dehradun.
    This website ("Graphic Era Hospital Dehradun," "Graphic Era Hospital
    Website," "Graphic Era Hospital" or the "Website") provides general
    information about Graphic Era Hospital and its services free of charge
    to users in India.`,
    paragraph2: ` All uses of the Graphic Era Hospital Website are subject to the
    following terms and conditions of use (these "Terms of Use").`,
    paragraph3: `<p>
    Please read these Terms of Use carefully before accessing or using any
    part of this Website.
    <span>
      By accessing or using this Website, you agree that you have read,
      understand and agree to be bound by these Terms of Use, as amended
      from time to time, as well as the Graphic Era Hospital
      <span>Privacy Policy</span>, which is hereby incorporated into these
      Terms of Use.
    </span>
    If you do not wish to agree to these Terms of Use, do not access or
    use any part of this Website.
  </p>`,
    paragraph4: `Graphic Era Hospital may revise and update these Terms of Use at any
    time by posting the amended terms to this Website. Your continued use
    of the Graphic Era Hospital Website means that you accept and agree to
    the revised Terms of Use. If you disagree with the Terms of Use (as
    amended from time to time) or are dissatisfied with this Website, your
    sole and exclusive remedy is to discontinue using this Website.`,
  };

  return (
    <>
      <Banner data={data} />
      <Terms data={data1} />
    </>
  );
}
