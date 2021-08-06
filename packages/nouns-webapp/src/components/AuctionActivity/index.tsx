import { Auction } from '../../wrappers/nounsAuction';
import { useState, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { Row, Col } from 'react-bootstrap';
import classes from './AuctionActivity.module.css';
import bidHistoryClasses from './BidHistory.module.css';
import Bid from '../Bid';
import AuctionTimer from '../AuctionTimer';
import CurrentBid from '../CurrentBid';
import Winner from '../Winner';
import BidHistory from '../BidHistory';
import { Modal } from 'react-bootstrap';
import AuctionNavigation from '../AuctionNavigation';
import AuctionActivityWrapper from '../AuctionActivityWrapper';
import AuctionActivityNounTitle from '../AuctionActivityNounTitle';
import AuctionActivityDateHeadline from '../AuctionActivityDateHeadline';
import BidHistoryBtn from '../BidHistoryBtn';

const AuctionActivity: React.FC<{
  auction: Auction;
  isFirstAuction: boolean;
  isLastAuction: boolean;
  onPrevAuctionClick: () => void;
  onNextAuctionClick: () => void;
}> = props => {
  const { auction, isFirstAuction, isLastAuction, onPrevAuctionClick, onNextAuctionClick } = props;

  const [auctionEnded, setAuctionEnded] = useState(false);
  const [auctionTimer, setAuctionTimer] = useState(false);

  const [showBidHistoryModal, setShowBidHistoryModal] = useState(false);
  const showBidModalHandler = () => {
    setShowBidHistoryModal(true);
  };
  const dismissBidModalHanlder = () => {
    setShowBidHistoryModal(false);
  };

  const bidHistoryTitle = `Noun ${auction && auction.nounId.toString()} bid history`;


  // timer logic
  useEffect(() => {
    if (!auction) return

    const timeLeft = Number(auction.endTime) - Math.floor(Date.now()/1000);

    if (auction && timeLeft <= 0) {
      setAuctionEnded(true);
    } else {
      setAuctionEnded(false);
      const timer = setTimeout(() => {
        setAuctionTimer(!auctionTimer);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [auctionTimer, auction]);

  if (!auction) return null;

  return (
    <>
      {showBidHistoryModal && (
        <Modal show={showBidHistoryModal} onHide={dismissBidModalHanlder} size="lg">
          <Modal.Header closeButton className={classes.modalHeader}>
            <Modal.Title className={classes.modalTitle}>
              <h1>{bidHistoryTitle}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BidHistory auctionId={auction.nounId.toString()} max={9999}/>
          </Modal.Body>
        </Modal>
      )}

      <AuctionActivityWrapper>
        <div className={classes.informationRow}>
          <Row className={classes.activityRow}>
            <Col lg={12}>
              <AuctionActivityDateHeadline startTime={auction.startTime} />
            </Col>
            <Col lg={12} className={classes.colAlignCenter}>
              <AuctionActivityNounTitle nounId={auction.nounId} />
              <AuctionNavigation
                isFirstAuction={isFirstAuction}
                isLastAuction={isLastAuction}
                onNextAuctionClick={onNextAuctionClick}
                onPrevAuctionClick={onPrevAuctionClick}
              />
            </Col>
          </Row>
          <Row className={classes.activityRow}>
            <Col lg={6}>
              <CurrentBid
                currentBid={new BigNumber(auction.amount.toString())}
                auctionEnded={auctionEnded}
              />
            </Col>
            <Col lg={6}>
            { auctionEnded ?
              <Winner winner={auction.bidder} />
              :
              <AuctionTimer
                auction={auction}
                auctionEnded={auctionEnded}
              />
            }

            </Col>

          </Row>
        </div>
        {isLastAuction && (
          <Row className={classes.activityRow}>
            <Col lg={12}>
              <Bid auction={auction} auctionEnded={auctionEnded} />
            </Col>
          </Row>
        )}

        <Row className={classes.activityRow}>
          <Col lg={12}>
            <BidHistory auctionId={auction.nounId.toString()} max={3} classes={bidHistoryClasses} />
            <BidHistoryBtn onClick={showBidModalHandler} />
          </Col>
        </Row>

      </AuctionActivityWrapper>
    </>
  );
};

export default AuctionActivity;