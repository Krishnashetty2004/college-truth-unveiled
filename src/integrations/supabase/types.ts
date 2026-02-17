export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      college_stories: {
        Row: {
          category: Database["public"]["Enums"]["story_category"]
          college_id: string
          comment_count: number
          content: string
          created_at: string
          id: string
          report_count: number
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
          upvote_count: number
          user_id: string
        }
        Insert: {
          category?: Database["public"]["Enums"]["story_category"]
          college_id: string
          comment_count?: number
          content: string
          created_at?: string
          id?: string
          report_count?: number
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
          upvote_count?: number
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["story_category"]
          college_id?: string
          comment_count?: number
          content?: string
          created_at?: string
          id?: string
          report_count?: number
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
          upvote_count?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "college_stories_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["id"]
          },
        ]
      }
      colleges: {
        Row: {
          ai_avoid_if: string | null
          ai_best_for: string | null
          ai_cons: string[] | null
          ai_overall_score: number | null
          ai_pros: string[] | null
          ai_summary: string | null
          ai_trend: string | null
          avg_admin: number | null
          avg_campus_life: number | null
          avg_curriculum: number | null
          avg_faculty: number | null
          avg_food: number | null
          avg_hostel: number | null
          avg_infrastructure: number | null
          avg_location: number | null
          avg_placement: number | null
          avg_safety: number | null
          avg_value_for_money: number | null
          avg_wifi: number | null
          city: string
          created_at: string
          established_year: number | null
          id: string
          is_active: boolean
          name: string
          ownership: Database["public"]["Enums"]["college_ownership"]
          seed_priority: number | null
          short_name: string | null
          state: string
          student_population: number | null
          tier: Database["public"]["Enums"]["college_tier"]
          total_reviews: number
          type: Database["public"]["Enums"]["college_type"]
          updated_at: string
          website: string | null
        }
        Insert: {
          ai_avoid_if?: string | null
          ai_best_for?: string | null
          ai_cons?: string[] | null
          ai_overall_score?: number | null
          ai_pros?: string[] | null
          ai_summary?: string | null
          ai_trend?: string | null
          avg_admin?: number | null
          avg_campus_life?: number | null
          avg_curriculum?: number | null
          avg_faculty?: number | null
          avg_food?: number | null
          avg_hostel?: number | null
          avg_infrastructure?: number | null
          avg_location?: number | null
          avg_placement?: number | null
          avg_safety?: number | null
          avg_value_for_money?: number | null
          avg_wifi?: number | null
          city: string
          created_at?: string
          established_year?: number | null
          id?: string
          is_active?: boolean
          name: string
          ownership?: Database["public"]["Enums"]["college_ownership"]
          seed_priority?: number | null
          short_name?: string | null
          state: string
          student_population?: number | null
          tier?: Database["public"]["Enums"]["college_tier"]
          total_reviews?: number
          type?: Database["public"]["Enums"]["college_type"]
          updated_at?: string
          website?: string | null
        }
        Update: {
          ai_avoid_if?: string | null
          ai_best_for?: string | null
          ai_cons?: string[] | null
          ai_overall_score?: number | null
          ai_pros?: string[] | null
          ai_summary?: string | null
          ai_trend?: string | null
          avg_admin?: number | null
          avg_campus_life?: number | null
          avg_curriculum?: number | null
          avg_faculty?: number | null
          avg_food?: number | null
          avg_hostel?: number | null
          avg_infrastructure?: number | null
          avg_location?: number | null
          avg_placement?: number | null
          avg_safety?: number | null
          avg_value_for_money?: number | null
          avg_wifi?: number | null
          city?: string
          created_at?: string
          established_year?: number | null
          id?: string
          is_active?: boolean
          name?: string
          ownership?: Database["public"]["Enums"]["college_ownership"]
          seed_priority?: number | null
          short_name?: string | null
          state?: string
          student_population?: number | null
          tier?: Database["public"]["Enums"]["college_tier"]
          total_reviews?: number
          type?: Database["public"]["Enums"]["college_type"]
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      helpful_votes: {
        Row: {
          created_at: string
          id: string
          professor_review_id: string | null
          review_id: string | null
          story_comment_id: string | null
          story_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          professor_review_id?: string | null
          review_id?: string | null
          story_comment_id?: string | null
          story_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          professor_review_id?: string | null
          review_id?: string | null
          story_comment_id?: string | null
          story_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "helpful_votes_professor_review_id_fkey"
            columns: ["professor_review_id"]
            isOneToOne: false
            referencedRelation: "professor_reviews"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "helpful_votes_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "helpful_votes_story_comment_id_fkey"
            columns: ["story_comment_id"]
            isOneToOne: false
            referencedRelation: "story_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "helpful_votes_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "college_stories"
            referencedColumns: ["id"]
          },
        ]
      }
      professor_reviews: {
        Row: {
          comment: string | null
          course_taught: string | null
          created_at: string
          difficulty_level: number | null
          helpful_count: number
          id: string
          overall_rating: number | null
          professor_id: string
          rating_approachability: number
          rating_grading: number
          rating_knowledge: number
          rating_punctuality: number
          rating_teaching: number
          report_count: number
          status: Database["public"]["Enums"]["review_status"]
          tags: Database["public"]["Enums"]["professor_tag"][] | null
          updated_at: string
          user_id: string
          would_take_again: boolean | null
          year_taken: number | null
        }
        Insert: {
          comment?: string | null
          course_taught?: string | null
          created_at?: string
          difficulty_level?: number | null
          helpful_count?: number
          id?: string
          overall_rating?: number | null
          professor_id: string
          rating_approachability: number
          rating_grading: number
          rating_knowledge: number
          rating_punctuality: number
          rating_teaching: number
          report_count?: number
          status?: Database["public"]["Enums"]["review_status"]
          tags?: Database["public"]["Enums"]["professor_tag"][] | null
          updated_at?: string
          user_id: string
          would_take_again?: boolean | null
          year_taken?: number | null
        }
        Update: {
          comment?: string | null
          course_taught?: string | null
          created_at?: string
          difficulty_level?: number | null
          helpful_count?: number
          id?: string
          overall_rating?: number | null
          professor_id?: string
          rating_approachability?: number
          rating_grading?: number
          rating_knowledge?: number
          rating_punctuality?: number
          rating_teaching?: number
          report_count?: number
          status?: Database["public"]["Enums"]["review_status"]
          tags?: Database["public"]["Enums"]["professor_tag"][] | null
          updated_at?: string
          user_id?: string
          would_take_again?: boolean | null
          year_taken?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "professor_reviews_professor_id_fkey"
            columns: ["professor_id"]
            isOneToOne: false
            referencedRelation: "professors"
            referencedColumns: ["id"]
          },
        ]
      }
      professors: {
        Row: {
          ai_overall_score: number | null
          ai_summary: string | null
          avg_difficulty: number | null
          college_id: string
          created_at: string
          department: string | null
          designation: string | null
          id: string
          name: string
          total_reviews: number
          updated_at: string
          would_take_again_pct: number | null
        }
        Insert: {
          ai_overall_score?: number | null
          ai_summary?: string | null
          avg_difficulty?: number | null
          college_id: string
          created_at?: string
          department?: string | null
          designation?: string | null
          id?: string
          name: string
          total_reviews?: number
          updated_at?: string
          would_take_again_pct?: number | null
        }
        Update: {
          ai_overall_score?: number | null
          ai_summary?: string | null
          avg_difficulty?: number | null
          college_id?: string
          created_at?: string
          department?: string | null
          designation?: string | null
          id?: string
          name?: string
          total_reviews?: number
          updated_at?: string
          would_take_again_pct?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "professors_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          admission_year: number | null
          anonymous_alias: string
          avatar_seed: string
          college_email: string | null
          college_id: string | null
          course: string | null
          created_at: string
          department: string | null
          graduation_year: number | null
          id: string
          reputation_score: number
          review_count: number
          updated_at: string
          user_id: string
          verification_tier: Database["public"]["Enums"]["verification_tier"]
        }
        Insert: {
          admission_year?: number | null
          anonymous_alias: string
          avatar_seed?: string
          college_email?: string | null
          college_id?: string | null
          course?: string | null
          created_at?: string
          department?: string | null
          graduation_year?: number | null
          id?: string
          reputation_score?: number
          review_count?: number
          updated_at?: string
          user_id: string
          verification_tier?: Database["public"]["Enums"]["verification_tier"]
        }
        Update: {
          admission_year?: number | null
          anonymous_alias?: string
          avatar_seed?: string
          college_email?: string | null
          college_id?: string | null
          course?: string | null
          created_at?: string
          department?: string | null
          graduation_year?: number | null
          id?: string
          reputation_score?: number
          review_count?: number
          updated_at?: string
          user_id?: string
          verification_tier?: Database["public"]["Enums"]["verification_tier"]
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_college"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          created_at: string
          details: string | null
          id: string
          reason: Database["public"]["Enums"]["report_reason"]
          resolved_at: string | null
          resolved_by: string | null
          status: string
          target_id: string
          target_type: Database["public"]["Enums"]["report_target_type"]
          user_id: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          id?: string
          reason: Database["public"]["Enums"]["report_reason"]
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          target_id: string
          target_type: Database["public"]["Enums"]["report_target_type"]
          user_id: string
        }
        Update: {
          created_at?: string
          details?: string | null
          id?: string
          reason?: Database["public"]["Enums"]["report_reason"]
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          target_id?: string
          target_type?: Database["public"]["Enums"]["report_target_type"]
          user_id?: string
        }
        Relationships: []
      }
      review_images: {
        Row: {
          caption: string | null
          created_at: string
          display_order: number
          id: string
          image_type: Database["public"]["Enums"]["image_type"]
          image_url: string
          review_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          display_order?: number
          id?: string
          image_type?: Database["public"]["Enums"]["image_type"]
          image_url: string
          review_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          display_order?: number
          id?: string
          image_type?: Database["public"]["Enums"]["image_type"]
          image_url?: string
          review_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_images_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          admission_year: number | null
          advice: string | null
          ai_authenticity_score: number | null
          ai_flag_reason: string | null
          ai_helpfulness_score: number | null
          ai_sentiment_score: number | null
          ai_topics: string[] | null
          college_id: string
          cons: string | null
          content: string
          course: string | null
          created_at: string
          department: string | null
          graduation_year: number | null
          has_images: boolean
          helpful_count: number
          id: string
          overall_rating: number | null
          pros: string | null
          rating_admin: number | null
          rating_campus_life: number | null
          rating_curriculum: number | null
          rating_faculty: number | null
          rating_food: number | null
          rating_hostel: number | null
          rating_infrastructure: number | null
          rating_location: number | null
          rating_placement: number | null
          rating_safety: number | null
          rating_value_for_money: number | null
          rating_wifi: number | null
          report_count: number
          reviewer_type: Database["public"]["Enums"]["reviewer_type"]
          status: Database["public"]["Enums"]["review_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          admission_year?: number | null
          advice?: string | null
          ai_authenticity_score?: number | null
          ai_flag_reason?: string | null
          ai_helpfulness_score?: number | null
          ai_sentiment_score?: number | null
          ai_topics?: string[] | null
          college_id: string
          cons?: string | null
          content: string
          course?: string | null
          created_at?: string
          department?: string | null
          graduation_year?: number | null
          has_images?: boolean
          helpful_count?: number
          id?: string
          overall_rating?: number | null
          pros?: string | null
          rating_admin?: number | null
          rating_campus_life?: number | null
          rating_curriculum?: number | null
          rating_faculty?: number | null
          rating_food?: number | null
          rating_hostel?: number | null
          rating_infrastructure?: number | null
          rating_location?: number | null
          rating_placement?: number | null
          rating_safety?: number | null
          rating_value_for_money?: number | null
          rating_wifi?: number | null
          report_count?: number
          reviewer_type?: Database["public"]["Enums"]["reviewer_type"]
          status?: Database["public"]["Enums"]["review_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          admission_year?: number | null
          advice?: string | null
          ai_authenticity_score?: number | null
          ai_flag_reason?: string | null
          ai_helpfulness_score?: number | null
          ai_sentiment_score?: number | null
          ai_topics?: string[] | null
          college_id?: string
          cons?: string | null
          content?: string
          course?: string | null
          created_at?: string
          department?: string | null
          graduation_year?: number | null
          has_images?: boolean
          helpful_count?: number
          id?: string
          overall_rating?: number | null
          pros?: string | null
          rating_admin?: number | null
          rating_campus_life?: number | null
          rating_curriculum?: number | null
          rating_faculty?: number | null
          rating_food?: number | null
          rating_hostel?: number | null
          rating_infrastructure?: number | null
          rating_location?: number | null
          rating_placement?: number | null
          rating_safety?: number | null
          rating_value_for_money?: number | null
          rating_wifi?: number | null
          report_count?: number
          reviewer_type?: Database["public"]["Enums"]["reviewer_type"]
          status?: Database["public"]["Enums"]["review_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["id"]
          },
        ]
      }
      story_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          parent_comment_id: string | null
          report_count: number
          story_id: string
          updated_at: string
          upvote_count: number
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          report_count?: number
          story_id: string
          updated_at?: string
          upvote_count?: number
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          report_count?: number
          story_id?: string
          updated_at?: string
          upvote_count?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "story_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_comments_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "college_stories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_anonymous_alias: { Args: { _user_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin_or_moderator: { Args: { _user_id: string }; Returns: boolean }
      toggle_story_vote: {
        Args: { p_story_id: string; p_user_id: string }
        Returns: Json
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      college_ownership: "government" | "private" | "deemed" | "autonomous"
      college_tier: "tier_1" | "tier_2" | "tier_3"
      college_type:
        | "engineering"
        | "medical"
        | "law"
        | "arts"
        | "science"
        | "commerce"
        | "management"
        | "pharmacy"
        | "architecture"
        | "other"
      content_status: "published" | "held" | "rejected"
      image_type:
        | "hostel"
        | "mess_food"
        | "classroom"
        | "library"
        | "campus"
        | "lab"
        | "sports"
        | "washroom"
        | "wifi_speed"
        | "other"
      professor_tag:
        | "tough_grader"
        | "easy_grader"
        | "inspirational"
        | "boring"
        | "reads_from_slides"
        | "industry_experience"
        | "research_focused"
        | "helpful"
        | "unapproachable"
        | "clear_explanations"
        | "assigns_lots_of_homework"
        | "test_heavy"
        | "extra_credit"
        | "flexible_deadlines"
      report_reason: "fake" | "defamatory" | "spam" | "inappropriate" | "other"
      report_target_type:
        | "review"
        | "story"
        | "story_comment"
        | "professor_review"
      review_status: "under_review" | "published" | "held" | "rejected"
      reviewer_type: "current_student" | "alumni" | "parent" | "other"
      story_category:
        | "campus_life"
        | "placement_experience"
        | "hostel_life"
        | "ragging"
        | "fest_culture"
        | "faculty_stories"
        | "admission_journey"
        | "funny"
        | "horror"
        | "inspirational"
        | "confession"
        | "other"
      verification_tier: "unverified" | "self_declared" | "verified_student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      college_ownership: ["government", "private", "deemed", "autonomous"],
      college_tier: ["tier_1", "tier_2", "tier_3"],
      college_type: [
        "engineering",
        "medical",
        "law",
        "arts",
        "science",
        "commerce",
        "management",
        "pharmacy",
        "architecture",
        "other",
      ],
      content_status: ["published", "held", "rejected"],
      image_type: [
        "hostel",
        "mess_food",
        "classroom",
        "library",
        "campus",
        "lab",
        "sports",
        "washroom",
        "wifi_speed",
        "other",
      ],
      professor_tag: [
        "tough_grader",
        "easy_grader",
        "inspirational",
        "boring",
        "reads_from_slides",
        "industry_experience",
        "research_focused",
        "helpful",
        "unapproachable",
        "clear_explanations",
        "assigns_lots_of_homework",
        "test_heavy",
        "extra_credit",
        "flexible_deadlines",
      ],
      report_reason: ["fake", "defamatory", "spam", "inappropriate", "other"],
      report_target_type: [
        "review",
        "story",
        "story_comment",
        "professor_review",
      ],
      review_status: ["under_review", "published", "held", "rejected"],
      reviewer_type: ["current_student", "alumni", "parent", "other"],
      story_category: [
        "campus_life",
        "placement_experience",
        "hostel_life",
        "ragging",
        "fest_culture",
        "faculty_stories",
        "admission_journey",
        "funny",
        "horror",
        "inspirational",
        "confession",
        "other",
      ],
      verification_tier: ["unverified", "self_declared", "verified_student"],
    },
  },
} as const
