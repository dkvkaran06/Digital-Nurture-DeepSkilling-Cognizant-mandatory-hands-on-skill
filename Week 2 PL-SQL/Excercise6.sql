SET SERVEROUTPUT ON;

DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT c.Name,
               t.TransactionID,
               t.TransactionDate,
               t.Amount,
               t.TransactionType
        FROM Customers c
        JOIN Accounts a
        ON c.CustomerID = a.CustomerID
        JOIN Transactions t
        ON a.AccountID = t.AccountID
        WHERE EXTRACT(MONTH FROM t.TransactionDate) = EXTRACT(MONTH FROM SYSDATE)
        AND EXTRACT(YEAR FROM t.TransactionDate) = EXTRACT(YEAR FROM SYSDATE);

    v_Name Customers.Name%TYPE;
    v_TransactionID Transactions.TransactionID%TYPE;
    v_TransactionDate Transactions.TransactionDate%TYPE;
    v_Amount Transactions.Amount%TYPE;
    v_TransactionType Transactions.TransactionType%TYPE;

BEGIN
    OPEN GenerateMonthlyStatements;

    LOOP
        FETCH GenerateMonthlyStatements
        INTO v_Name, v_TransactionID, v_TransactionDate, v_Amount, v_TransactionType;

        EXIT WHEN GenerateMonthlyStatements%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(
            'Customer: ' || v_Name ||
            ', Transaction ID: ' || v_TransactionID ||
            ', Date: ' || TO_CHAR(v_TransactionDate,'DD-MON-YYYY') ||
            ', Amount: ' || v_Amount ||
            ', Type: ' || v_TransactionType
        );
    END LOOP;

    CLOSE GenerateMonthlyStatements;
END;
/

DECLARE
    CURSOR ApplyAnnualFee IS
        SELECT AccountID
        FROM Accounts;

    v_AccountID Accounts.AccountID%TYPE;

BEGIN
    OPEN ApplyAnnualFee;

    LOOP
        FETCH ApplyAnnualFee
        INTO v_AccountID;

        EXIT WHEN ApplyAnnualFee%NOTFOUND;

        UPDATE Accounts
        SET Balance = Balance - 100
        WHERE AccountID = v_AccountID;

    END LOOP;

    CLOSE ApplyAnnualFee;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Annual Fee Applied Successfully');
END;
/

DECLARE
    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID,
               InterestRate
        FROM Loans;

    v_LoanID Loans.LoanID%TYPE;
    v_InterestRate Loans.InterestRate%TYPE;

BEGIN
    OPEN UpdateLoanInterestRates;

    LOOP
        FETCH UpdateLoanInterestRates
        INTO v_LoanID, v_InterestRate;

        EXIT WHEN UpdateLoanInterestRates%NOTFOUND;

        UPDATE Loans
        SET InterestRate = v_InterestRate + 0.5
        WHERE LoanID = v_LoanID;

    END LOOP;

    CLOSE UpdateLoanInterestRates;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan Interest Rates Updated Successfully');
END;
/

SELECT * FROM Accounts;

SELECT LoanID, InterestRate
FROM Loans;
