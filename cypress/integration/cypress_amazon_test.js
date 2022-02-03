describe("cypress core concepts", () => {
  it("visit amazon.in", () => {
    cy.visit("https://www.amazon.in/");
    cy.get('[href="/deals?ref_=nav_cs_gb"]').click();

    cy.get(
      '[href="https://www.amazon.in/deal/d33e6673?showVariations=true&ref=dlx_deals_gd_dcl_img_0_d33e6673_dt_sl15_86"] > .a-row > .a-image-container > img'
    ).click();

    cy.get('[data-testid="grid-deals-container"] > :nth-child(1)', {
      force: true,
    }).click();

    cy.get(
      ":nth-child(5) > .a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base"
    ).click();
  });
});
