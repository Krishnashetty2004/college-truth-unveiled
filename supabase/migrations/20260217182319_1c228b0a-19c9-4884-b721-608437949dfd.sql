
-- Migration: Aggregate triggers for college reviews and professor reviews

-- Function to update college aggregates when reviews change
CREATE OR REPLACE FUNCTION update_college_aggregates()
RETURNS trigger AS $$
BEGIN
  UPDATE colleges SET
    total_reviews = (SELECT COUNT(*) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_placement = (SELECT AVG(rating_placement) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_faculty = (SELECT AVG(rating_faculty) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_curriculum = (SELECT AVG(rating_curriculum) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_hostel = (SELECT AVG(rating_hostel) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_food = (SELECT AVG(rating_food) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_wifi = (SELECT AVG(rating_wifi) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_infrastructure = (SELECT AVG(rating_infrastructure) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_campus_life = (SELECT AVG(rating_campus_life) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_safety = (SELECT AVG(rating_safety) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_location = (SELECT AVG(rating_location) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_admin = (SELECT AVG(rating_admin) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_value_for_money = (SELECT AVG(rating_value_for_money) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    ai_overall_score = (SELECT AVG(overall_rating) FROM reviews WHERE college_id = NEW.college_id AND status = 'published')
  WHERE id = NEW.college_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger on reviews
CREATE TRIGGER trg_update_college_aggregates
AFTER INSERT OR UPDATE OF status ON reviews
FOR EACH ROW EXECUTE FUNCTION update_college_aggregates();

-- Function to update professor aggregates when professor reviews change
CREATE OR REPLACE FUNCTION update_professor_aggregates()
RETURNS trigger AS $$
BEGIN
  UPDATE professors SET
    total_reviews = (SELECT COUNT(*) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    avg_difficulty = (SELECT AVG(difficulty_level) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    would_take_again_pct = (SELECT AVG(CASE WHEN would_take_again THEN 100.0 ELSE 0.0 END) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    ai_overall_score = (SELECT AVG(overall_rating) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published')
  WHERE id = NEW.professor_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger on professor_reviews
CREATE TRIGGER trg_update_professor_aggregates
AFTER INSERT OR UPDATE OF status ON professor_reviews
FOR EACH ROW EXECUTE FUNCTION update_professor_aggregates();
