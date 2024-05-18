import { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Claim } from "../../models/Claim";
import { ClaimDocument } from "../../models/ClaimDocument";
import ClaimInfo from "./components/ClaimInfo";
import API, { Tables } from "../../shared/api-client/ApiClient";
import { ClaimStatus } from "../../models/ClaimStatus";
import { ClaimPayment, ClaimPaymentDTO } from "../../models/ClaimPayment";
import ResolveClaimForm from "./components/ResolveClaimForm";

type LoaderData = {
  claim: Claim;
  docs: ClaimDocument[];
};

const ClaimDetails: FC = () => {
  const [error, setError] = useState<Error>();
  const [willApprove, setWillApprove] = useState<boolean>(false);

  const { claim, docs } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  const handleReject = async () => {
    try {
      await API.update<Claim>(Tables.CLAIMS, {
        ...claim,
        status: ClaimStatus.REJECTED,
      });
    } catch (error) {
      setError(error as Error);
    } finally {
      navigate("..");
    }
  };

  const handleApprove = async (payment: ClaimPaymentDTO) => {
    try {
      await API.update<Claim>(Tables.CLAIMS, {
        ...claim,
        status: ClaimStatus.APPROVED,
      });
      await API.create<ClaimPayment>(Tables.CLAIM_PAYMENTS, payment);
    } catch (error) {
      setError(error as Error);
    } finally {
      navigate("..");
    }
  };

  return (
    <Container>
      <Button
        className="mt-4 ms-4"
        variant="outline-secondary"
        onClick={() => navigate("..")}
      >
        <i className="bi bi-box-arrow-in-left mx-1"></i>
        Go back
      </Button>
      <div className="my-5">
        <ClaimInfo claim={claim} docs={docs} />
        <hr />
        <div className="d-flex gap-4 px-4">
          <Button
            className="d-inline-flex align-items-center"
            onClick={() => setWillApprove(true)}
            variant="outline-primary"
            disabled={willApprove}
          >
            Resolve
          </Button>
          <Button
            className="d-inline-flex align-items-center"
            onClick={handleReject}
            variant="danger"
          >
            Reject
            <RxCross1 className="ms-1" />
          </Button>
          {error && <p className="text-danger">{error.message}</p>}
        </div>
        {willApprove && (
          <div className="my-5">
            <ResolveClaimForm claim={claim} onSubmit={handleApprove} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ClaimDetails;
