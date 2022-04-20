import "./Footer.scss";

import { Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Subtract } from "../../assets/subtract.svg";
import { ReactComponent as Divider } from "../../assets/footerdivider.svg";
import TextLogo from "../../assets/textlogo.png";

const viewBox = "0 0 2 175";
const style = { width: "2px", height: "175px", marginRight: "40px" };

export const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMedScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Grid className={`footer-container ${isSmallScreen && `smaller`}`} container direction="row" xs={12} justifyContent="space-between">
      <Grid container direction="column" xs={12} md={4}>
        <Grid item style={{ display: "flex", marginBottom: "20px", justifyContent: `${isMedScreen ? "center" : "flex-start"}` }}>
          <img src={TextLogo} alt="textlogo" width="55%" />
        </Grid>
      </Grid>

      <Grid container direction="row" xs={12} md={6} justifyContent={isSmallScreen ? "space-between" : "flex-end"}>
        <Grid container direction="column" xs={4} sm={3}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Resources</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Borrower Form
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Docs
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                FAQs
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Discord
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Newsletter
              </Typography>
            </Link>
          </Grid>
        </Grid>

        {!isSmallScreen &&
          <Grid item>
            <SvgIcon component={Divider} viewBox={viewBox} style={style} />
          </Grid>
        }

        <Grid container direction="column" xs={3}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Contact</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Borrow
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Partner
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Media
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              <Typography className="sublink-text" variant="body2" align="left">
                Say hello
              </Typography>
            </Link>
          </Grid>
        </Grid>

        {!isSmallScreen &&
          <Grid item>
            <SvgIcon component={Divider} viewBox={viewBox} style={style} />
          </Grid>
        }

        <Grid container direction="column" xs={3}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Social</strong>
            </Typography>
          </Grid>
          <Grid container direction="column" spacing={2} alignItems="flex-start">
            <Grid item>
              <Link href="#" underline="none">
                <SvgIcon component={Discord} className="footer-discord" viewBox="0 0 26 32" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">
                <SvgIcon component={Twitter} className="footer-twitter" viewBox="0 0 32 25" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">
                <SvgIcon component={Subtract} className="footer-other-icon" viewBox="0 0 21 29" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
