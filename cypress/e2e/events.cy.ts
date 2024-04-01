import { openEventsPage } from "../support/commands";

describe("Events", () => {
    beforeEach(() => {
        openEventsPage();
    });

    it("checks basic rendering", () => {
        cy.title().should("include", "Sports Day");
        cy.get('[data-testid="events-title"]').should("contain", "All Events");
        cy.get('[data-testid="search-box"]').should("be.visible");
    });

    it("checks if able to search events", () => {
        cy.get('[data-testid="events-group"]').should("have.length", 3);
        cy.get('[data-testid="event-card"]').should("have.length", 10);
        cy.get('[data-testid="search-box"]').type("100M Sprint");
        cy.get('[data-testid="events-group"]').should("have.length", 1);
        cy.get('[data-testid="event-card"]').should("have.length", 1);
        cy.get('[data-testid="event-icon"]').should("contain", "A");
        cy.get('[data-testid="event-name"]').should("contain", "100M Sprint");
        cy.get('[data-testid="event-category"]').should("contain", "(Athletics)");
        cy.get('[data-testid="event-duration"]').should("contain", "5 PM - 6 PM");
    });

    it("checks if able to select events and selected events are getting removed from All events", () => {
        cy.get('[data-testid="event-card"]').should("have.length", 10);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 0);
        cy.get('[data-testid="event-action-1"]').should("contain", "Select").click();
        cy.get('[data-testid="event-card"]').should("have.length", 9);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 1);
    });

    it("checks if able to remove selected events and removed events are showing in All events", () => {
        cy.get('[data-testid="event-card"]').should("have.length", 9);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 1);
        cy.get('[data-testid="event-action-1"]').should("contain", "Remove").click();
        cy.get('[data-testid="event-card"]').should("have.length", 10);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 0);
    });

    it("checks if clashing events are not getting selected", () => {
        cy.get('[data-testid="event-action-2"]').should("not.be.disabled");
        cy.get('[data-testid="event-action-1"]').should("contain", "Select").click();
        cy.get('[data-testid="event-action-2"]').should("be.disabled");
        cy.get('[data-testid="event-action-1"]').should("contain", "Remove").click();
        cy.get('[data-testid="event-action-2"]').should("not.be.disabled");
    });

    it("checks if unable to select more than 3 events", () => {
        cy.get('[data-testid="event-action-8"]').should("contain", "Select").click();
        cy.get('[data-testid="event-action-9"]').should("contain", "Select").click();
        cy.get('[data-testid="event-action-10"]').should("contain", "Select").click();
        cy.get('[data-testid="event-card"]').should("have.length", 7);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 3);
        cy.get('[data-testid="event-action-1"]').should("contain", "Select").click();
        cy.get('[data-testid="toast-body"]').should(
            "contain",
            "You can only select 3 events at a time."
        );
        cy.get('[data-testid="event-card"]').should("have.length", 7);
        cy.get('[data-testid="event-card-selected"]').should("have.length", 3);
    });
});
